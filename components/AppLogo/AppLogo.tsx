import React from 'react';
import { Pane } from 'evergreen-ui';

const AppLogo = () => {
  return (
    <Pane marginX={16}>
      <svg
        id="Capa_1"
        enableBackground="new 0 0 512 512"
        height="48"
        viewBox="0 0 512 512"
        width="48"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="m495.484 90.839h-478.968l-8.699 10.161v294.151c0 9.122 7.395 16.516 16.516 16.516h477.667l10-7.021v-297.29c0-9.123-7.395-16.517-16.516-16.517z"
            fill="#e5646e"
          />
          <path
            d="m16.516 355.097v-264.258c-9.121 0-16.516 7.394-16.516 16.516v297.29c0 9.122 7.395 16.516 16.516 16.516h478.968c9.121 0 16.516-7.395 16.516-16.516h-445.935c-27.365 0-49.549-22.183-49.549-49.548z"
            fill="#db4655"
          />
          <path
            d="m352.726 229.999h-70.292l-21.722-66.851c-1.483-4.565-7.942-4.565-9.424 0l-21.722 66.851h-70.292c-4.8 0-6.795 6.142-2.912 8.964l56.867 41.317-21.721 66.852c-1.483 4.565 3.741 8.361 7.624 5.539l56.868-41.317 56.867 41.317c3.883 2.822 9.108-.975 7.625-5.539l-21.721-66.852 56.867-41.317c3.883-2.821 1.888-8.964-2.912-8.964z"
            fill="#ffe07d"
          />
        </g>
      </svg>
    </Pane>
  );
};

export default AppLogo;