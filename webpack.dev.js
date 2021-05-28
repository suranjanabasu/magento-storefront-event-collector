const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    plugins: [
        new webpack.DefinePlugin({
            SNOWPLOW_COLLECTOR_URL: JSON.stringify(
                "https://com-magento-prod1.mini.snplow.net",
            ),
            SNOWPLOW_COLLECTOR_PATH: JSON.stringify(
                "/com.snowplowanalytics.snowplow/tp2",
            ),
        }),
    ],
});
