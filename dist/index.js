'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const isInViewport = (el, { top: t, height: h } = el.getBoundingClientRect()) => t <= window.innerHeight && t + h >= 0;
const useIsScrolledIntoView = (ref, propState = true) => {
    const [ isIntoView, setIsIntoView ] = react.useState(propState);
    const handleOnScroll = react.useCallback(() => {
        setIsIntoView(isInViewport(ref.current));
    }, []);
    react.useEffect(
        () => {
            window.addEventListener('scroll', handleOnScroll);
            return () => {
                window.removeEventListener('scroll', handleOnScroll);
            };
        },
        [ ref ]
    );
    return isIntoView;
};

exports.default = useIsScrolledIntoView;
//# sourceMappingURL=index.js.map
