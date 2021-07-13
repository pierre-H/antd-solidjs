import { UsergroupDeleteOutlined as BaseUsergroupDeleteOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UsergroupDeleteOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUsergroupDeleteOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-usergroup-delete-outlined text-xl"
            role="img"
            aria-label="usergroup-delete-outlined"
            innerHTML={svgHTMLString}
        />
    );
};