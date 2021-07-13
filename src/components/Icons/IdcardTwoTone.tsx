import { IdcardTwoTone as BaseIdcardTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const IdcardTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseIdcardTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-idcard-two-tone text-xl"
            role="img"
            aria-label="idcard-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};