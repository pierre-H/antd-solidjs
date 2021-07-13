import { SignalFilled as BaseSignalFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SignalFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSignalFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-signal-filled text-xl"
            role="img"
            aria-label="signal-filled"
            innerHTML={svgHTMLString}
        />
    );
};