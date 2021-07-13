import { QuestionOutlined as BaseQuestionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const QuestionOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseQuestionOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-question-outlined text-xl"
            role="img"
            aria-label="question-outlined"
            innerHTML={svgHTMLString}
        />
    );
};