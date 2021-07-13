import { YahooFilled as BaseYahooFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const YahooFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseYahooFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-yahoo-filled text-xl"
            role="img"
            aria-label="yahoo-filled"
            innerHTML={svgHTMLString}
        />
    );
};