/**
 * DivineLabs branded splash for the MusicWars runtime distribution.
 * Ruffle attribution is intentionally retained in the UI and distribution.
 *
 * @returns The HTMLElement containing the splash screen
 */
export function SplashScreen() {
    return (
        <div id="splash-screen" class="hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="logo divinelabs-runtime-logo"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 560 190"
                role="img"
                aria-label="DivineLabs Flash Runtime"
            >
                <defs>
                    <linearGradient
                        id="divinelabs-gradient"
                        x1="56"
                        y1="24"
                        x2="500"
                        y2="168"
                    >
                        <stop offset="0" stop-color="#26bde2" />
                        <stop offset="1" stop-color="#68efac" />
                    </linearGradient>
                </defs>
                <rect
                    x="28"
                    y="24"
                    width="142"
                    height="142"
                    rx="42"
                    fill="#0d3c4a"
                />
                <path
                    d="M66 61h41c35 0 57 20 57 47s-22 47-57 47h-8"
                    fill="none"
                    stroke="url(#divinelabs-gradient)"
                    stroke-width="21"
                    stroke-linecap="round"
                />
                <path
                    d="m80 111 22 22 39-47"
                    fill="none"
                    stroke="#f8fcff"
                    stroke-width="17"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <text
                    x="195"
                    y="91"
                    fill="#f8fcff"
                    font-family="Segoe UI, sans-serif"
                    font-size="43"
                    font-weight="750"
                    letter-spacing="1"
                >
                    DivineLabs
                </text>
                <text
                    x="198"
                    y="127"
                    fill="url(#divinelabs-gradient)"
                    font-family="Segoe UI, sans-serif"
                    font-size="24"
                    font-weight="650"
                    letter-spacing="5"
                >
                    FLASH RUNTIME
                </text>
                <text
                    x="200"
                    y="155"
                    fill="#a6b9c7"
                    font-family="Segoe UI, sans-serif"
                    font-size="13"
                    letter-spacing="1.5"
                >
                    POWERED BY RUFFLE
                </text>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="loading-animation"
                viewBox="0 0 66 66"
            >
                <circle
                    xmlns="http://www.w3.org/2000/svg"
                    class="spinner"
                    fill="none"
                    stroke-width="6"
                    stroke-linecap="round"
                    cx="33"
                    cy="33"
                    r="30"
                />
            </svg>
            <div class="loadbar">
                <div class="loadbar-inner" />
            </div>
        </div>
    );
}
