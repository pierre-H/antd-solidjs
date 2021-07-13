import { RobotFilled as BaseRobotFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RobotFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRobotFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-robot-filled text-xl"
            role="img"
            aria-label="robot-filled"
            innerHTML={svgHTMLString}
        />
    );
};