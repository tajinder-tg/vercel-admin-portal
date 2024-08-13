const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|avi|mov|wmv|flv|webm|mkv)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          publicPath: `/_next/static/videos/`,
          outputPath: `${isServer ? "../" : ""}static/videos/`,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
