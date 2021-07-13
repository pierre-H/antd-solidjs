import { DatabaseFilled as BaseDatabaseFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DatabaseFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDatabaseFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-database-filled text-xl"
            role="img"
            aria-label="database-filled"
            innerHTML={svgHTMLString}
        />
    );
};