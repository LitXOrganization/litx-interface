import "./index.scss";

export function PoweredByAlgebra() {
    return (
        <div>
            <a href={"https://algebra.finance"} rel={"noopener noreferrer"} target={"_blank"}>
                <span style={{ display: "flex", width: "150px" }}>
                    <svg width="188" height="18" viewBox="0 0 188 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.064 17.744C1.872 17.744 1.71733 17.6853 1.6 17.568C1.49333 17.4613 1.44 17.312 1.44 17.12V9.568C1.45067 8.736 1.648 7.98933 2.032 7.328C2.42667 6.656 2.95467 6.128 3.616 5.744C4.288 5.36 5.04 5.168 5.872 5.168C6.72533 5.168 7.488 5.36533 8.16 5.76C8.832 6.144 9.36 6.672 9.744 7.344C10.1387 8.016 10.336 8.77867 10.336 9.632C10.336 10.4747 10.144 11.232 9.76 11.904C9.38667 12.576 8.87467 13.1093 8.224 13.504C7.57333 13.888 6.83733 14.08 6.016 14.08C5.30133 14.08 4.65067 13.9307 4.064 13.632C3.488 13.3227 3.024 12.9173 2.672 12.416V17.12C2.672 17.312 2.61333 17.4613 2.496 17.568C2.38933 17.6853 2.24533 17.744 2.064 17.744ZM5.872 12.96C6.49067 12.96 7.04533 12.816 7.536 12.528C8.02667 12.24 8.41067 11.8453 8.688 11.344C8.976 10.832 9.12 10.2613 9.12 9.632C9.12 8.992 8.976 8.42133 8.688 7.92C8.41067 7.41867 8.02667 7.024 7.536 6.736C7.04533 6.43733 6.49067 6.288 5.872 6.288C5.264 6.288 4.71467 6.43733 4.224 6.736C3.73333 7.024 3.34933 7.41867 3.072 7.92C2.79467 8.42133 2.656 8.992 2.656 9.632C2.656 10.2613 2.79467 10.832 3.072 11.344C3.34933 11.8453 3.73333 12.24 4.224 12.528C4.71467 12.816 5.264 12.96 5.872 12.96ZM16.7365 14.08C15.8832 14.08 15.1205 13.888 14.4485 13.504C13.7765 13.12 13.2485 12.592 12.8645 11.92C12.4805 11.248 12.2885 10.4853 12.2885 9.632C12.2885 8.768 12.4805 8 12.8645 7.328C13.2485 6.656 13.7765 6.128 14.4485 5.744C15.1205 5.36 15.8832 5.168 16.7365 5.168C17.5898 5.168 18.3472 5.36 19.0085 5.744C19.6805 6.128 20.2085 6.656 20.5925 7.328C20.9765 8 21.1738 8.768 21.1845 9.632C21.1845 10.4853 20.9872 11.248 20.5925 11.92C20.2085 12.592 19.6805 13.12 19.0085 13.504C18.3472 13.888 17.5898 14.08 16.7365 14.08ZM16.7365 12.96C17.3552 12.96 17.9098 12.816 18.4005 12.528C18.8912 12.24 19.2752 11.8453 19.5525 11.344C19.8298 10.8427 19.9685 10.272 19.9685 9.632C19.9685 8.992 19.8298 8.42133 19.5525 7.92C19.2752 7.408 18.8912 7.008 18.4005 6.72C17.9098 6.432 17.3552 6.288 16.7365 6.288C16.1178 6.288 15.5632 6.432 15.0725 6.72C14.5818 7.008 14.1925 7.408 13.9045 7.92C13.6272 8.42133 13.4885 8.992 13.4885 9.632C13.4885 10.272 13.6272 10.8427 13.9045 11.344C14.1925 11.8453 14.5818 12.24 15.0725 12.528C15.5632 12.816 16.1178 12.96 16.7365 12.96ZM25.0803 14C24.9416 14 24.8189 13.9627 24.7123 13.888C24.6056 13.8133 24.5309 13.7173 24.4883 13.6L21.9923 6.112C21.9283 5.84533 21.9336 5.63733 22.0083 5.488C22.0829 5.328 22.2323 5.248 22.4563 5.248C22.5949 5.248 22.7176 5.28533 22.8243 5.36C22.9309 5.43467 23.0109 5.552 23.0643 5.712L25.2883 12.512H24.9363L27.0003 5.728C27.0429 5.58933 27.1123 5.47733 27.2083 5.392C27.3149 5.296 27.4483 5.248 27.6083 5.248C27.7683 5.248 27.8963 5.29067 27.9923 5.376C28.0989 5.46133 28.1736 5.57867 28.2163 5.728L30.1843 12.352H29.9123L32.0883 5.712C32.1949 5.40267 32.3923 5.248 32.6803 5.248C32.9149 5.248 33.0749 5.33867 33.1603 5.52C33.2456 5.69067 33.2456 5.888 33.1603 6.112L30.6643 13.6C30.6216 13.7173 30.5469 13.8133 30.4403 13.888C30.3443 13.9627 30.2269 14 30.0883 14C29.9496 14 29.8216 13.9627 29.7043 13.888C29.5976 13.8133 29.5283 13.7173 29.4963 13.6L27.4803 6.912H27.6723L25.6562 13.6C25.6136 13.728 25.5389 13.8293 25.4323 13.904C25.3256 13.968 25.2083 14 25.0803 14ZM38.5955 14.08C37.7315 14.08 36.9635 13.8933 36.2915 13.52C35.6302 13.136 35.1075 12.608 34.7235 11.936C34.3502 11.264 34.1635 10.496 34.1635 9.632C34.1635 8.75733 34.3395 7.98933 34.6915 7.328C35.0542 6.656 35.5502 6.128 36.1795 5.744C36.8088 5.36 37.5342 5.168 38.3555 5.168C39.1662 5.168 39.8702 5.35467 40.4675 5.728C41.0755 6.09067 41.5448 6.59733 41.8755 7.248C42.2062 7.89867 42.3715 8.64 42.3715 9.472C42.3715 9.64267 42.3182 9.78133 42.2115 9.888C42.1048 9.984 41.9662 10.032 41.7955 10.032H34.9955V9.008H41.9235L41.2355 9.504C41.2462 8.88533 41.1342 8.33067 40.8995 7.84C40.6648 7.34933 40.3288 6.96533 39.8915 6.688C39.4648 6.41067 38.9528 6.272 38.3555 6.272C37.7475 6.272 37.2142 6.416 36.7555 6.704C36.2968 6.992 35.9395 7.392 35.6835 7.904C35.4382 8.40533 35.3155 8.98133 35.3155 9.632C35.3155 10.2827 35.4542 10.8587 35.7315 11.36C36.0195 11.8613 36.4088 12.256 36.8995 12.544C37.3902 12.832 37.9555 12.976 38.5955 12.976C38.9795 12.976 39.3635 12.912 39.7475 12.784C40.1422 12.6453 40.4568 12.4747 40.6915 12.272C40.8088 12.176 40.9422 12.128 41.0915 12.128C41.2408 12.1173 41.3688 12.1547 41.4755 12.24C41.6142 12.368 41.6835 12.5067 41.6835 12.656C41.6942 12.8053 41.6355 12.9333 41.5075 13.04C41.1555 13.3387 40.7075 13.5893 40.1635 13.792C39.6195 13.984 39.0968 14.08 38.5955 14.08ZM44.9676 8.608C44.9996 7.94667 45.1703 7.35467 45.4796 6.832C45.7996 6.30933 46.2103 5.89867 46.7116 5.6C47.2236 5.30133 47.789 5.152 48.4076 5.152C48.8983 5.152 49.277 5.22133 49.5436 5.36C49.8103 5.49867 49.9116 5.70133 49.8476 5.968C49.805 6.128 49.7303 6.23467 49.6236 6.288C49.5276 6.34133 49.405 6.36267 49.2556 6.352C49.117 6.34133 48.957 6.33067 48.7756 6.32C48.1783 6.26667 47.645 6.33067 47.1756 6.512C46.717 6.68267 46.349 6.94933 46.0716 7.312C45.805 7.67467 45.6716 8.10667 45.6716 8.608H44.9676ZM45.0636 14C44.8716 14 44.7223 13.9467 44.6156 13.84C44.509 13.7333 44.4556 13.584 44.4556 13.392V5.856C44.4556 5.664 44.509 5.51467 44.6156 5.408C44.7223 5.30133 44.8716 5.248 45.0636 5.248C45.2556 5.248 45.405 5.30133 45.5116 5.408C45.6183 5.51467 45.6716 5.664 45.6716 5.856V13.392C45.6716 13.584 45.6183 13.7333 45.5116 13.84C45.405 13.9467 45.2556 14 45.0636 14ZM55.1111 14.08C54.2471 14.08 53.4791 13.8933 52.8071 13.52C52.1458 13.136 51.6231 12.608 51.2391 11.936C50.8658 11.264 50.6791 10.496 50.6791 9.632C50.6791 8.75733 50.8551 7.98933 51.2071 7.328C51.5698 6.656 52.0658 6.128 52.6951 5.744C53.3245 5.36 54.0498 5.168 54.8711 5.168C55.6818 5.168 56.3858 5.35467 56.9831 5.728C57.5911 6.09067 58.0605 6.59733 58.3911 7.248C58.7218 7.89867 58.8871 8.64 58.8871 9.472C58.8871 9.64267 58.8338 9.78133 58.7271 9.888C58.6205 9.984 58.4818 10.032 58.3111 10.032H51.5111V9.008H58.4391L57.7511 9.504C57.7618 8.88533 57.6498 8.33067 57.4151 7.84C57.1805 7.34933 56.8445 6.96533 56.4071 6.688C55.9805 6.41067 55.4685 6.272 54.8711 6.272C54.2631 6.272 53.7298 6.416 53.2711 6.704C52.8125 6.992 52.4551 7.392 52.1991 7.904C51.9538 8.40533 51.8311 8.98133 51.8311 9.632C51.8311 10.2827 51.9698 10.8587 52.2471 11.36C52.5351 11.8613 52.9245 12.256 53.4151 12.544C53.9058 12.832 54.4711 12.976 55.1111 12.976C55.4951 12.976 55.8791 12.912 56.2631 12.784C56.6578 12.6453 56.9725 12.4747 57.2071 12.272C57.3245 12.176 57.4578 12.128 57.6071 12.128C57.7565 12.1173 57.8845 12.1547 57.9911 12.24C58.1298 12.368 58.1991 12.5067 58.1991 12.656C58.2098 12.8053 58.1511 12.9333 58.0231 13.04C57.6711 13.3387 57.2231 13.5893 56.6791 13.792C56.1351 13.984 55.6125 14.08 55.1111 14.08ZM64.6428 14.08C63.8001 14.08 63.0428 13.888 62.3708 13.504C61.6988 13.1093 61.1654 12.576 60.7708 11.904C60.3868 11.232 60.1948 10.4693 60.1948 9.616C60.1948 8.77333 60.3814 8.016 60.7548 7.344C61.1387 6.672 61.6561 6.144 62.3068 5.76C62.9574 5.36533 63.6934 5.168 64.5148 5.168C65.2294 5.168 65.8748 5.32267 66.4508 5.632C67.0268 5.93067 67.4908 6.33067 67.8428 6.832V2.128C67.8428 1.936 67.9014 1.78667 68.0188 1.68C68.1361 1.56267 68.2854 1.504 68.4668 1.504C68.6481 1.504 68.7974 1.56267 68.9148 1.68C69.0321 1.78667 69.0908 1.936 69.0908 2.128V9.68C69.0694 10.512 68.8614 11.264 68.4668 11.936C68.0828 12.5973 67.5548 13.12 66.8828 13.504C66.2214 13.888 65.4748 14.08 64.6428 14.08ZM64.6428 12.96C65.2614 12.96 65.8108 12.816 66.2908 12.528C66.7814 12.2293 67.1654 11.8293 67.4427 11.328C67.7308 10.8267 67.8748 10.256 67.8748 9.616C67.8748 8.98667 67.7308 8.42133 67.4427 7.92C67.1654 7.408 66.7814 7.008 66.2908 6.72C65.8108 6.432 65.2614 6.288 64.6428 6.288C64.0348 6.288 63.4854 6.432 62.9948 6.72C62.5041 7.008 62.1148 7.408 61.8268 7.92C61.5388 8.42133 61.3948 8.98667 61.3948 9.616C61.3948 10.256 61.5388 10.8267 61.8268 11.328C62.1148 11.8293 62.5041 12.2293 62.9948 12.528C63.4854 12.816 64.0348 12.96 64.6428 12.96ZM81.0908 14.08C80.2588 14.08 79.5068 13.888 78.8348 13.504C78.1734 13.12 77.6454 12.5973 77.2508 11.936C76.8668 11.264 76.6694 10.512 76.6588 9.68V2.128C76.6588 1.936 76.7121 1.78667 76.8188 1.68C76.9361 1.56267 77.0908 1.504 77.2828 1.504C77.4641 1.504 77.6081 1.56267 77.7148 1.68C77.8321 1.78667 77.8908 1.936 77.8908 2.128V6.832C78.2428 6.33067 78.7068 5.93067 79.2828 5.632C79.8694 5.32267 80.5201 5.168 81.2348 5.168C82.0561 5.168 82.7921 5.36533 83.4427 5.76C84.0934 6.144 84.6054 6.672 84.9788 7.344C85.3628 8.016 85.5548 8.77333 85.5548 9.616C85.5548 10.4693 85.3574 11.232 84.9628 11.904C84.5788 12.576 84.0508 13.1093 83.3788 13.504C82.7068 13.888 81.9441 14.08 81.0908 14.08ZM81.0908 12.96C81.7094 12.96 82.2641 12.816 82.7548 12.528C83.2454 12.2293 83.6294 11.8293 83.9068 11.328C84.1948 10.8267 84.3388 10.256 84.3388 9.616C84.3388 8.98667 84.1948 8.42133 83.9068 7.92C83.6294 7.408 83.2454 7.008 82.7548 6.72C82.2641 6.432 81.7094 6.288 81.0908 6.288C80.4828 6.288 79.9334 6.432 79.4427 6.72C78.9521 7.008 78.5681 7.408 78.2908 7.92C78.0134 8.42133 77.8748 8.98667 77.8748 9.616C77.8748 10.256 78.0134 10.8267 78.2908 11.328C78.5681 11.8293 78.9521 12.2293 79.4427 12.528C79.9334 12.816 80.4828 12.96 81.0908 12.96ZM88.9909 17.808C88.9055 17.808 88.8095 17.7867 88.7029 17.744C88.3402 17.584 88.2389 17.328 88.3989 16.976L93.5669 5.584C93.7269 5.24267 93.9829 5.14667 94.3349 5.296C94.6975 5.44533 94.7989 5.696 94.6389 6.048L89.4549 17.44C89.3482 17.6853 89.1935 17.808 88.9909 17.808ZM90.7669 13.728C90.6069 13.8027 90.4575 13.8187 90.3189 13.776C90.1802 13.7227 90.0682 13.616 89.9829 13.456L86.4149 6.064C86.3402 5.904 86.3295 5.75467 86.3829 5.616C86.4362 5.47733 86.5429 5.37067 86.7029 5.296C86.8629 5.22133 87.0122 5.21067 87.1509 5.264C87.2895 5.30667 87.3962 5.408 87.4709 5.568L90.9749 12.96C91.0602 13.12 91.0869 13.2693 91.0549 13.408C91.0229 13.5467 90.9269 13.6533 90.7669 13.728ZM123.85 14C123.604 14 123.428 13.8987 123.322 13.696C123.215 13.4933 123.204 13.296 123.29 13.104L127.994 1.936C128.111 1.648 128.314 1.504 128.602 1.504C128.879 1.504 129.076 1.648 129.194 1.936L133.914 13.12C134.01 13.3227 133.994 13.52 133.866 13.712C133.748 13.904 133.578 14 133.354 14C133.226 14 133.108 13.968 133.002 13.904C132.906 13.84 132.826 13.744 132.762 13.616L128.362 2.944H128.858L124.426 13.616C124.372 13.744 124.292 13.84 124.186 13.904C124.09 13.968 123.978 14 123.85 14ZM124.906 11.024L125.386 9.952H131.882L132.362 11.024H124.906ZM137.516 14C137.089 14 136.705 13.8827 136.364 13.648C136.033 13.4133 135.772 13.088 135.58 12.672C135.398 12.256 135.308 11.776 135.308 11.232V2.112C135.308 1.93067 135.361 1.78667 135.468 1.68C135.585 1.56267 135.734 1.504 135.916 1.504C136.097 1.504 136.241 1.56267 136.348 1.68C136.465 1.78667 136.524 1.93067 136.524 2.112V11.232C136.524 11.6907 136.614 12.064 136.796 12.352C136.988 12.64 137.228 12.784 137.516 12.784H137.916C138.076 12.784 138.204 12.8427 138.299 12.96C138.396 13.0667 138.444 13.2107 138.444 13.392C138.444 13.5733 138.374 13.7227 138.236 13.84C138.108 13.9467 137.937 14 137.724 14H137.516ZM143.515 14.08C142.672 14.08 141.925 13.8933 141.275 13.52C140.624 13.136 140.112 12.608 139.739 11.936C139.376 11.264 139.195 10.496 139.195 9.632C139.195 8.75733 139.387 7.984 139.771 7.312C140.155 6.64 140.683 6.11733 141.355 5.744C142.027 5.36 142.789 5.168 143.643 5.168C144.507 5.168 145.269 5.36 145.931 5.744C146.603 6.11733 147.125 6.64 147.499 7.312C147.883 7.984 148.08 8.75733 148.091 9.632L147.371 10.016C147.371 10.8053 147.205 11.5093 146.875 12.128C146.544 12.736 146.085 13.216 145.499 13.568C144.923 13.9093 144.261 14.08 143.515 14.08ZM143.675 17.456C142.832 17.456 142.091 17.296 141.451 16.976C140.811 16.6667 140.283 16.24 139.867 15.696C139.749 15.568 139.696 15.4293 139.707 15.28C139.728 15.1307 139.808 15.008 139.947 14.912C140.085 14.816 140.24 14.784 140.411 14.816C140.581 14.848 140.715 14.928 140.811 15.056C141.12 15.44 141.515 15.7493 141.995 15.984C142.485 16.2187 143.051 16.336 143.691 16.336C144.288 16.336 144.827 16.192 145.307 15.904C145.787 15.616 146.165 15.2107 146.443 14.688C146.731 14.1653 146.875 13.552 146.875 12.848V10.416L147.339 9.488L148.091 9.632V12.896C148.091 13.76 147.899 14.5333 147.515 15.216C147.131 15.9093 146.608 16.4533 145.947 16.848C145.285 17.2533 144.528 17.456 143.675 17.456ZM143.643 12.96C144.272 12.96 144.827 12.8213 145.307 12.544C145.797 12.256 146.181 11.8613 146.459 11.36C146.736 10.8587 146.875 10.2827 146.875 9.632C146.875 8.98133 146.736 8.40533 146.459 7.904C146.181 7.392 145.797 6.99733 145.307 6.72C144.827 6.432 144.272 6.288 143.643 6.288C143.013 6.288 142.453 6.432 141.963 6.72C141.472 6.99733 141.088 7.392 140.811 7.904C140.533 8.40533 140.395 8.98133 140.395 9.632C140.395 10.2827 140.533 10.8587 140.811 11.36C141.088 11.8613 141.472 12.256 141.963 12.544C142.453 12.8213 143.013 12.96 143.643 12.96ZM154.455 14.08C153.591 14.08 152.823 13.8933 152.151 13.52C151.49 13.136 150.967 12.608 150.583 11.936C150.21 11.264 150.023 10.496 150.023 9.632C150.023 8.75733 150.199 7.98933 150.551 7.328C150.914 6.656 151.41 6.128 152.039 5.744C152.668 5.36 153.394 5.168 154.215 5.168C155.026 5.168 155.73 5.35467 156.327 5.728C156.935 6.09067 157.404 6.59733 157.735 7.248C158.066 7.89867 158.231 8.64 158.231 9.472C158.231 9.64267 158.178 9.78133 158.071 9.888C157.964 9.984 157.826 10.032 157.655 10.032H150.855V9.008H157.783L157.095 9.504C157.106 8.88533 156.994 8.33067 156.759 7.84C156.524 7.34933 156.188 6.96533 155.751 6.688C155.324 6.41067 154.812 6.272 154.215 6.272C153.607 6.272 153.074 6.416 152.615 6.704C152.156 6.992 151.799 7.392 151.543 7.904C151.298 8.40533 151.175 8.98133 151.175 9.632C151.175 10.2827 151.314 10.8587 151.591 11.36C151.879 11.8613 152.268 12.256 152.759 12.544C153.25 12.832 153.815 12.976 154.455 12.976C154.839 12.976 155.223 12.912 155.607 12.784C156.002 12.6453 156.316 12.4747 156.551 12.272C156.668 12.176 156.802 12.128 156.951 12.128C157.1 12.1173 157.228 12.1547 157.335 12.24C157.474 12.368 157.543 12.5067 157.543 12.656C157.554 12.8053 157.495 12.9333 157.367 13.04C157.015 13.3387 156.567 13.5893 156.023 13.792C155.479 13.984 154.956 14.08 154.455 14.08ZM164.747 14.08C163.915 14.08 163.163 13.888 162.491 13.504C161.83 13.12 161.302 12.5973 160.907 11.936C160.523 11.264 160.326 10.512 160.315 9.68V2.128C160.315 1.936 160.368 1.78667 160.475 1.68C160.592 1.56267 160.747 1.504 160.939 1.504C161.12 1.504 161.264 1.56267 161.371 1.68C161.488 1.78667 161.547 1.936 161.547 2.128V6.832C161.899 6.33067 162.363 5.93067 162.939 5.632C163.526 5.32267 164.176 5.168 164.891 5.168C165.712 5.168 166.448 5.36533 167.099 5.76C167.75 6.144 168.262 6.672 168.635 7.344C169.019 8.016 169.211 8.77333 169.211 9.616C169.211 10.4693 169.014 11.232 168.619 11.904C168.235 12.576 167.707 13.1093 167.035 13.504C166.363 13.888 165.6 14.08 164.747 14.08ZM164.747 12.96C165.366 12.96 165.92 12.816 166.411 12.528C166.902 12.2293 167.286 11.8293 167.563 11.328C167.851 10.8267 167.995 10.256 167.995 9.616C167.995 8.98667 167.851 8.42133 167.563 7.92C167.286 7.408 166.902 7.008 166.411 6.72C165.92 6.432 165.366 6.288 164.747 6.288C164.139 6.288 163.59 6.432 163.099 6.72C162.608 7.008 162.224 7.408 161.947 7.92C161.67 8.42133 161.531 8.98667 161.531 9.616C161.531 10.256 161.67 10.8267 161.947 11.328C162.224 11.8293 162.608 12.2293 163.099 12.528C163.59 12.816 164.139 12.96 164.747 12.96ZM172.14 8.608C172.172 7.94667 172.342 7.35467 172.652 6.832C172.972 6.30933 173.382 5.89867 173.884 5.6C174.396 5.30133 174.961 5.152 175.58 5.152C176.07 5.152 176.449 5.22133 176.716 5.36C176.982 5.49867 177.084 5.70133 177.02 5.968C176.977 6.128 176.902 6.23467 176.796 6.288C176.7 6.34133 176.577 6.36267 176.428 6.352C176.289 6.34133 176.129 6.33067 175.948 6.32C175.35 6.26667 174.817 6.33067 174.348 6.512C173.889 6.68267 173.521 6.94933 173.244 7.312C172.977 7.67467 172.844 8.10667 172.844 8.608H172.14ZM172.236 14C172.044 14 171.894 13.9467 171.788 13.84C171.681 13.7333 171.628 13.584 171.628 13.392V5.856C171.628 5.664 171.681 5.51467 171.788 5.408C171.894 5.30133 172.044 5.248 172.236 5.248C172.428 5.248 172.577 5.30133 172.684 5.408C172.79 5.51467 172.844 5.664 172.844 5.856V13.392C172.844 13.584 172.79 13.7333 172.684 13.84C172.577 13.9467 172.428 14 172.236 14ZM182.171 14.08C181.35 14.08 180.614 13.888 179.963 13.504C179.312 13.1093 178.795 12.576 178.411 11.904C178.038 11.232 177.851 10.4747 177.851 9.632C177.851 8.77867 178.043 8.016 178.427 7.344C178.822 6.672 179.355 6.144 180.027 5.76C180.699 5.36533 181.456 5.168 182.299 5.168C183.142 5.168 183.894 5.36533 184.555 5.76C185.227 6.144 185.755 6.672 186.139 7.344C186.534 8.016 186.736 8.77867 186.747 9.632L186.251 10.016C186.251 10.784 186.07 11.4773 185.707 12.096C185.355 12.704 184.87 13.1893 184.251 13.552C183.643 13.904 182.95 14.08 182.171 14.08ZM182.299 12.96C182.918 12.96 183.467 12.816 183.947 12.528C184.438 12.24 184.822 11.8453 185.099 11.344C185.387 10.832 185.531 10.2613 185.531 9.632C185.531 8.992 185.387 8.42133 185.099 7.92C184.822 7.41867 184.438 7.024 183.947 6.736C183.467 6.43733 182.918 6.288 182.299 6.288C181.691 6.288 181.142 6.43733 180.651 6.736C180.16 7.024 179.771 7.41867 179.483 7.92C179.195 8.42133 179.051 8.992 179.051 9.632C179.051 10.2613 179.195 10.832 179.483 11.344C179.771 11.8453 180.16 12.24 180.651 12.528C181.142 12.816 181.691 12.96 182.299 12.96ZM186.123 14C185.942 14 185.792 13.9467 185.675 13.84C185.558 13.7227 185.499 13.5733 185.499 13.392V10.656L185.803 9.392L186.747 9.632V13.392C186.747 13.5733 186.688 13.7227 186.571 13.84C186.454 13.9467 186.304 14 186.123 14Z"
                            fill="var(--text1)"
                        />
                        <path fillRule="evenodd" clipRule="evenodd" d="M102 15.2719L109.101 1.15314V10.6911L102 15.2719Z" fill="#EF359E" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M109.337 11.0205L102.237 15.6013H116.438L109.337 11.0205Z" fill="#2797FF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M109.574 1.15314L116.674 15.2719L109.574 10.6911V1.15314Z" fill="#0EFBDF" />
                    </svg>
                </span>
            </a>
        </div>
    );
}