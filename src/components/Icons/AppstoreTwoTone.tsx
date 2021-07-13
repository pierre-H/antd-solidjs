import { AppstoreTwoTone as BaseAppstoreTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AppstoreTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAppstoreTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-appstore-two-tone text-xl"
            role="img"
            aria-label="appstore-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};