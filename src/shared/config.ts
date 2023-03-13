interface ConfigType {
  ApiUrl: string;
  IsPreview?: boolean;
  PreviewNumberPath?: string;
}

const config: ConfigType = {
  ApiUrl: process.env.REACT_APP_API_URL || "",
  IsPreview: process.env.REACT_APP_FEATURE_TYPE === "preview",
  PreviewNumberPath: process.env.REACT_APP_PREVIEW_NUMBER_PATH,
};

export default config;
