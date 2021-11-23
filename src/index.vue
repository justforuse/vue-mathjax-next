<template>
    <span ref="mathjaxRef"></span>
</template>

<script>
import { defineComponent, reactive, toRefs, watch, onMounted } from "vue";
export default defineComponent({
    name: 'VueMathjax',
    props: {
        formula: {
            type: String,
            default: "",
        },
        safe: {
            type: Boolean,
            default: true,
        },
        options: {
            type: Object,
            default: function () {
                return {};
            },
        },
    },
    setup(props) {
        const state = reactive({
            mathjaxRef: null,
        });

        const renderContent = () => {
            if (props.safe) {
                state.mathjaxRef.textContent = props.formula;
            } else {
                state.mathjaxRef.innerHTML = props.formula;
            }
        };

        const renderMathJax = () => {
            renderContent();
            if (window.MathJax) {
                window.MathJax.Hub.Config({
                    tex2jax: {
                        inlineMath: [
                            ["$", "$"],
                            ["(", ")"],
                        ],
                        displayMath: [
                            ["$$", "$$"],
                            ["[", "]"],
                        ],
                        processEscapes: true,
                        processEnvironments: true,
                    },
                    // Center justify equations in code and markdown cells. Elsewhere
                    // we use CSS to left justify single line equations in code cells.
                    displayAlign: "center",
                    "HTML-CSS": {
                        styles: { ".MathJax_Display": { margin: 0 } },
                        linebreaks: { automatic: true },
                    },
                    ...props.options,
                });
                window.MathJax.Hub.Queue([
                    "Typeset",
                    window.MathJax.Hub,
                    state.mathjaxRef,
                ]);
            }
        };

        watch(
            () => props.formula,
            () => {
                renderMathJax();
            }
        );

        onMounted(() => {
            renderMathJax();
        });

        return {
            ...toRefs(state),
        };
    }
})
</script>
