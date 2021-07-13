import { DingtalkOutlined as BaseDingtalkOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DingtalkOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDingtalkOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dingtalk-outlined text-xl"
            role="img"
            aria-label="dingtalk-outlined"
            innerHTML={svgHTMLString}
        />
    );
};