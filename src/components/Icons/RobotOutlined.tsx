import { RobotOutlined as BaseRobotOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RobotOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRobotOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-robot-outlined text-xl"
            role="img"
            aria-label="robot-outlined"
            innerHTML={svgHTMLString}
        />
    );
};