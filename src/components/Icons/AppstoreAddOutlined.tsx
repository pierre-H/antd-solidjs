import { AppstoreAddOutlined as BaseAppstoreAddOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AppstoreAddOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAppstoreAddOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-appstore-add-outlined text-xl"
            role="img"
            aria-label="appstore-add-outlined"
            innerHTML={svgHTMLString}
        />
    );
};