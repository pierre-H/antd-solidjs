import { QuestionCircleOutlined as BaseQuestionCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const QuestionCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseQuestionCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-question-circle-outlined text-xl"
            role="img"
            aria-label="question-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};