import { IdcardFilled as BaseIdcardFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const IdcardFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseIdcardFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-idcard-filled text-xl"
            role="img"
            aria-label="idcard-filled"
            innerHTML={svgHTMLString}
        />
    );
};