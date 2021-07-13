import { UsergroupAddOutlined as BaseUsergroupAddOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UsergroupAddOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUsergroupAddOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-usergroup-add-outlined text-xl"
            role="img"
            aria-label="usergroup-add-outlined"
            innerHTML={svgHTMLString}
        />
    );
};