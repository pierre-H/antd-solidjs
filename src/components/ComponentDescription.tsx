import { PropsWithChildren } from "solid-js";

export const ComponentDescription = (
    props: PropsWithChildren<{
        title: string;
        class?: string;
        noFlex?: boolean;
    }>
) => {
    return (
        <>
            <p class="my-2">{props.title} :</p>
            <div
                class={props.class ?? ""}
                classList={{
                    "flex flex-wrap items-center space-x-2":
                        props.noFlex !== true,
                }}
            >
                {props.children}
            </div>
        </>
    );
};
