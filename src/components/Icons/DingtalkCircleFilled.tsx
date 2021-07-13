import { DingtalkCircleFilled as BaseDingtalkCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DingtalkCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDingtalkCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dingtalk-circle-filled text-xl"
            role="img"
            aria-label="dingtalk-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};