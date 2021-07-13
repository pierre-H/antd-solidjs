import { QuestionCircleTwoTone as BaseQuestionCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const QuestionCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseQuestionCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-question-circle-two-tone text-xl"
            role="img"
            aria-label="question-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};