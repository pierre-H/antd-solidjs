import { ProfileTwoTone as BaseProfileTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ProfileTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseProfileTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-profile-two-tone text-xl"
            role="img"
            aria-label="profile-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};