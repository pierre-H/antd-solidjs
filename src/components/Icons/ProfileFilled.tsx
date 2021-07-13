import { ProfileFilled as BaseProfileFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ProfileFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseProfileFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-profile-filled text-xl"
            role="img"
            aria-label="profile-filled"
            innerHTML={svgHTMLString}
        />
    );
};