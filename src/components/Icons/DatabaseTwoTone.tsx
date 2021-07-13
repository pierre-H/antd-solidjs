import { DatabaseTwoTone as BaseDatabaseTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DatabaseTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDatabaseTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-database-two-tone text-xl"
            role="img"
            aria-label="database-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};