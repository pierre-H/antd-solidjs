import { DatabaseOutlined as BaseDatabaseOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DatabaseOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDatabaseOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-database-outlined text-xl"
            role="img"
            aria-label="database-outlined"
            innerHTML={svgHTMLString}
        />
    );
};