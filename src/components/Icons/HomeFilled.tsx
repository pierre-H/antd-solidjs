import { HomeFilled as BaseHomeFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HomeFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHomeFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-home-filled text-xl"
            role="img"
            aria-label="home-filled"
            innerHTML={svgHTMLString}
        />
    );
};