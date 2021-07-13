import { DingtalkSquareFilled as BaseDingtalkSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DingtalkSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDingtalkSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dingtalk-square-filled text-xl"
            role="img"
            aria-label="dingtalk-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};