import { TrophyOutlined as BaseTrophyOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TrophyOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTrophyOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-trophy-outlined text-xl"
            role="img"
            aria-label="trophy-outlined"
            innerHTML={svgHTMLString}
        />
    );
};