import { ImportOutlined as BaseImportOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ImportOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseImportOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-import-outlined text-xl"
            role="img"
            aria-label="import-outlined"
            innerHTML={svgHTMLString}
        />
    );
};