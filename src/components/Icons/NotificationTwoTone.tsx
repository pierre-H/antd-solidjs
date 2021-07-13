import { NotificationTwoTone as BaseNotificationTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const NotificationTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseNotificationTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-notification-two-tone text-xl"
            role="img"
            aria-label="notification-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};