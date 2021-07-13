import { GroupOutlined as BaseGroupOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GroupOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGroupOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-group-outlined text-xl"
            role="img"
            aria-label="group-outlined"
            innerHTML={svgHTMLString}
        />
    );
};