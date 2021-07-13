import { QuestionCircleFilled as BaseQuestionCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const QuestionCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseQuestionCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-question-circle-filled text-xl"
            role="img"
            aria-label="question-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};