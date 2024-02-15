import path from "path";
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass/')],
    prependData: "@import 'main'",
  },
};

export default nextConfig;
