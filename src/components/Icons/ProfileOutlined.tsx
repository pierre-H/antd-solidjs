import { ProfileOutlined as BaseProfileOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ProfileOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseProfileOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-profile-outlined text-xl"
            role="img"
            aria-label="profile-outlined"
            innerHTML={svgHTMLString}
        />
    );
};