import { ConsoleSqlOutlined as BaseConsoleSqlOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ConsoleSqlOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseConsoleSqlOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-console-sql-outlined text-xl"
            role="img"
            aria-label="console-sql-outlined"
            innerHTML={svgHTMLString}
        />
    );
};