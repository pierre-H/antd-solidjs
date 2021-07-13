import { FileAddTwoTone as BaseFileAddTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileAddTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileAddTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-add-two-tone text-xl"
            role="img"
            aria-label="file-add-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};