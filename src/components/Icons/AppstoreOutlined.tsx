import { AppstoreOutlined as BaseAppstoreOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AppstoreOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAppstoreOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-appstore-outlined text-xl"
            role="img"
            aria-label="appstore-outlined"
            innerHTML={svgHTMLString}
        />
    );
};