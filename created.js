document.addEventListener("DOMContentLoaded", () => {
    // 스타일 시트 탭 설정
    const styleTabButton = document.querySelector(".tab-button.active");
    const seedTabButton = document.querySelector(".tab-button:not(.active)");
    const styleContent = document.querySelector(".recommendation-area.style");
    const seedContent = document.querySelector(".recommendation-area.seed");

    styleContent.style.display = "block";
    seedContent.style.display = "none";

    styleTabButton.addEventListener("click", () => {
        styleContent.style.display = "block";
        seedContent.style.display = "none";
        styleTabButton.classList.add("active");
        seedTabButton.classList.remove("active");
    });

    seedTabButton.addEventListener("click", () => {
        seedContent.style.display = "block";
        styleContent.style.display = "none";
        seedTabButton.classList.add("active");
        styleTabButton.classList.remove("active");
    });

    // 캔버스 설정
    const canvas = document.getElementById("drawingCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        canvas.width = 510;
        canvas.height = 510;
        let drawing = false;

        canvas.addEventListener("mousedown", () => { drawing = true; });
        canvas.addEventListener("mouseup", () => { drawing = false; ctx.beginPath(); });
        canvas.addEventListener("mousemove", (event) => {
            if (!drawing) return;
            ctx.lineWidth = 4;
            ctx.lineCap = "round";
            ctx.strokeStyle = "#000";
            ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        });
    } else {
        console.error("Canvas element not found!");
    }

    // 툴바 초기화
    const pencilButton = document.getElementById('pencilButton');
    const pencilIcon = document.getElementById('pencilIcon');
    const icons = {
        pencilIcon: 'icon/pencil.png',
        eraserIcon: 'icon/eraser.png',
        undoIcon: 'icon/undo.png',
        redoIcon: 'icon/redo.png',
        clearIcon: 'icon/clear.png'
    };

    function resetToolIcons() {
        Object.keys(icons).forEach(id => document.getElementById(id).src = icons[id]);
    }

    pencilButton?.addEventListener('mousedown', () => {
        resetToolIcons();
        pencilIcon.src = 'icon/pencil_active.png';
    });

    // 복사 기능
    const copyButton = document.querySelector(".copy-btn");
    const tooltipCopy = document.getElementById("tooltipCopy");

    copyButton?.addEventListener("mouseenter", () => { tooltipCopy.style.display = "block"; });
    copyButton?.addEventListener("mouseleave", () => { tooltipCopy.style.display = "none"; });
});

// 툴바 버튼 설정
window.addEventListener('load', () => {
    const pencilButton = document.getElementById('pencilButton');
    const pencilIcon = document.getElementById('pencilIcon');
    resetToolIcons();
    pencilIcon.src = 'icon/pencil_active.png';

    // 버튼 클릭에 따른 이벤트 설정
    document.getElementById('pencilButton').addEventListener('mousedown', function() {
        resetToolIcons();
        document.getElementById('pencilIcon').src = 'icon/pencil_active.png';
    });

    document.getElementById('eraserButton').addEventListener('mousedown', function() {
        resetToolIcons();
        document.getElementById('eraserIcon').src = 'icon/eraser_active.png';
    });

    document.getElementById('undoButton').addEventListener('mousedown', function() {
        resetToolIcons();
        document.getElementById('undoIcon').src = 'icon/undo_active.png';
    });

    document.getElementById('redoButton').addEventListener('mousedown', function() {
        resetToolIcons();
        document.getElementById('redoIcon').src = 'icon/redo_active.png';
    });

    document.getElementById('clearButton').addEventListener('mousedown', function() {
        resetToolIcons();
        document.getElementById('clearIcon').src = 'icon/clear_active.png';
    });
});





        

/* 이미지생성 버튼 클릭했을 때 로딩 나오기 */
// document.addEventListener("DOMContentLoaded", () => {
//     const createButton = document.querySelector(".create-button");
//     const loadingAnimation = document.getElementById("loading-animation");
//     const resultContainer = document.querySelector(".Result");

//     // Result와 로딩 애니메이션 초기 상태 숨기기
//     if (resultContainer && loadingAnimation) {
//         resultContainer.style.display = "none";
//         loadingAnimation.style.display = "none";
//     }

//     // "이미지 만들기" 버튼 클릭 시 로딩 및 결과 표시
//     createButton.addEventListener("click", () => {
//         if (loadingAnimation && resultContainer) {
//             // 로딩 애니메이션 표시 및 결과 이미지 숨기기
//             loadingAnimation.style.display = "flex";
//             resultContainer.style.display = "none";

//             // 4초 후 로딩 애니메이션 숨기고 결과 이미지 표시
//             setTimeout(() => {
//                 loadingAnimation.style.display = "none";
//                 resultContainer.style.display = "block";
//             }, 4000); // 4초 후 실행
//         } else {
//             console.error("필요한 요소가 존재하지 않습니다.");
//         }
//     });
// });




/* 잠금버튼 */
document.addEventListener("DOMContentLoaded", () => {
    const promptText = document.getElementById("promptText");
    const lockIcon = document.getElementById("lockIcon").querySelector("img");
    const seedText = document.querySelector(".seed-text");

    lockIcon.addEventListener("click", () => {
        // 배경색 토글
        promptText.classList.toggle("dark");

        // 이미지 변경
        if (lockIcon.src.includes("lock11.png")) {
            lockIcon.src = "icon/lock22.png"; // 잠금 해제 이미지
            seedText.textContent = "비슷한 출력을 생성하기 위해 시드가 잠깁니다";
        } else {
            lockIcon.src = "icon/lock11.png"; // 잠금 이미지
            seedText.textContent = "시드가 잠금 해제되어 출력이 더욱 다양하게 제공됩니다.";
        }
    });
});




/* 오버레이  */
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".overlay");
    const guideButtonIcon = document.getElementById("infoButton");
    const guideButtonText = document.querySelector(".info-txt");
    const closeOverlay = document.getElementById("closeOverlay");

    // Show overlay on button click
    const showOverlay = () => {
        overlay.style.display = "flex";
    };

    // Attach the showOverlay function to both button and text clicks
    guideButtonIcon.addEventListener("click", showOverlay);
    guideButtonText.addEventListener("click", showOverlay);

    // Close overlay when clicking the close button
    closeOverlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});


/* 슬라이더 */
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".overlay");
    const guideButtonIcon = document.getElementById("infoButton");
    const guideButtonText = document.querySelector(".info-txt");
    const closeOverlay = document.getElementById("closeOverlay");
    const skipButton = document.getElementById("skipButton");
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const nextSlideButton = document.getElementById("nextSlide");
    const prevSlideButton = document.getElementById("prevSlide");
    let currentSlideIndex = 0;

    // **오버레이를 보이게 하는 함수**
    const showOverlay = () => {
        overlay.style.display = "flex"; // 버튼 클릭 시 오버레이 보이게 설정
        showSlide(currentSlideIndex); // 슬라이드 초기화
    };
    guideButtonIcon.addEventListener("click", showOverlay);
    guideButtonText.addEventListener("click", showOverlay);

    // **오버레이를 닫는 함수**
    const closeGuide = () => {
        overlay.style.display = "none"; // 오버레이 숨김
        currentSlideIndex = 0; // 슬라이드 초기화
    };
    skipButton.addEventListener("click", closeGuide);
    closeOverlay.addEventListener("click", closeGuide);

    // 슬라이드 전환 함수
    function showSlide(index) {
        slides.forEach((slide, idx) => slide.classList.remove("active", "slide-exit"));
        slides[index].classList.add("active");
        dots.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
        currentSlideIndex = index;
    }
    nextSlideButton.addEventListener("click", () => {
        if (currentSlideIndex < slides.length - 1) showSlide(currentSlideIndex + 1);
        else closeGuide();
    });
    prevSlideButton.addEventListener("click", () => {
        if (currentSlideIndex > 0) showSlide(currentSlideIndex - 1);
    });
    dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
});



/*  벨 버튼 */
document.addEventListener("DOMContentLoaded", () => {
    const notificationContainer = document.querySelector(".notification");
    const notificationToggle = document.getElementById("notificationToggle");

    if (notificationContainer && notificationToggle) {
        notificationContainer.addEventListener("click", () => {
            notificationToggle.style.display = notificationToggle.style.display === "none" ? "block" : "none";
        });

        // 클릭한 곳이 notification 영역이 아닐 경우 토글 박스 숨기기
        document.addEventListener("click", (event) => {
            if (!notificationContainer.contains(event.target) && !notificationToggle.contains(event.target)) {
                notificationToggle.style.display = "none";
            }
        });
    }
});




/* 저장하기 공유하기 */
document.addEventListener("DOMContentLoaded", () => {
    const generatedImage = document.getElementById("generated-image");
    const bottomButtons = document.querySelector(".bottom-image-buttons");

    if (generatedImage && bottomButtons) {
        generatedImage.addEventListener("mouseover", () => {
            bottomButtons.style.opacity = "1";
            bottomButtons.style.pointerEvents = "auto";
        });

        generatedImage.addEventListener("mouseout", () => {
            bottomButtons.style.opacity = "0";
            bottomButtons.style.pointerEvents = "none";
        });
        bottomButtons.addEventListener("mouseover", () => {
            bottomButtons.style.opacity = "1";
            bottomButtons.style.pointerEvents = "auto";
        });
        bottomButtons.addEventListener("mouseout", () => {
            bottomButtons.style.opacity = "0";
            bottomButtons.style.pointerEvents = "none";
        });
    } else {
        console.error("generated-image 또는 bottom-image-buttons 요소를 찾을 수 없습니다.");
    }
});



/* 저장하기 공유하기 말풍선 */
document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("saveButton");
    const shareButton = document.getElementById("shareButton");
    const tooltipSave = document.querySelector(".tooltip-save");
    const tooltipShare = document.querySelector(".tooltip-share");

    saveButton.addEventListener("mouseover", () => {
        tooltipSave.style.display = "block";
    });
    saveButton.addEventListener("mouseout", () => {
        tooltipSave.style.display = "none";
    });

    shareButton.addEventListener("mouseover", () => {
        tooltipShare.style.display = "block";
    });
    shareButton.addEventListener("mouseout", () => {
        tooltipShare.style.display = "none";
    });
});











    // /*  버튼 눌럿을떄 백그라운드 잠깐 바뀌기  */
    // document.addEventListener("DOMContentLoaded", () => {
    //     const video = document.querySelector("#backgroundVideo");
    //     const createButton = document.querySelector(".create-button");

    //     createButton.addEventListener("click", () => {
    //         // 2.mp4로 변경하고 재생
    //         video.querySelector("source").src = "SR5.mp4";
    //         video.load();
    //         video.play();

    //         // 4초 후 다시 1.mp4로 변경하고 재생
    //         setTimeout(() => {
    //             video.querySelector("source").src = "SR1.mp4";
    //             video.load();
    //             video.play();
    //         }, 4000); // 4초 뒤 실행
    //     });
    // });



    /* 스타일부분 range ui */
    document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("styleSlider");
    const tooltip2 = document.getElementById("rangeTooltip2");

    function updateTooltipPosition() {
        const sliderRect = slider.getBoundingClientRect();
        const tooltipWidth = tooltip2.offsetWidth;
        const thumbWidth = 18;
        const tooltipPosition = sliderRect.left + (slider.value / slider.max) * (sliderRect.width - thumbWidth) + (thumbWidth / 2) - (tooltipWidth / 2);
        tooltip2.style.left = `${tooltipPosition}px`;
    }

    slider.addEventListener("input", () => {
        tooltip2.textContent = slider.value;
        updateTooltipPosition();
    });

    slider.addEventListener("mouseover", () => {
        tooltip2.style.display = "block";
        updateTooltipPosition();
    });

    slider.addEventListener("mouseout", () => {
        tooltip2.style.display = "none";
    });
});



/* 게이지느낌 */

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("styleSlider");

    function updateSliderBackground() {
        const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, #1082c7 ${value}%, #7000ff ${value}%, #222 ${value}%)`;
    }

    slider.addEventListener("input", updateSliderBackground);

    // 초기 상태 업데이트
    updateSliderBackground();
});







    // 프롬프트 복사 기능
document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.querySelector(".copy-btn");
    const tooltipCopy = document.getElementById("tooltipCopy");
    const copyAlert = document.getElementById("copyAlert");

    // 프롬프트 복사 기능
    copyButton.addEventListener("click", () => {
        const promptTextContent = document.querySelector(".prompt-text").innerText;
        
        // 텍스트 복사
        navigator.clipboard.writeText(promptTextContent)
            .then(() => {
                // 복사 완료 안내 표시
                copyAlert.style.display = "block";
                
                // 2초 후 안내 메시지 숨기기
                setTimeout(() => {
                    copyAlert.style.display = "none";
                }, 2000);
            })
            .catch(err => console.error("복사 실패:", err));
    });
});











/*  탭키 구현 */
document.addEventListener("DOMContentLoaded", () => {
    const promptInput = document.querySelector(".prompt-input");
    const tabIndicator = document.querySelector(".tab-indicator");

    promptInput.addEventListener("keydown", (event) => {
        if (event.key === "Tab") {
            event.preventDefault(); // 기본 탭 기능 막기
            if (promptInput.value === "") {
                promptInput.value = promptInput.placeholder; // placeholder 값을 입력란에 넣기
            }
            promptInput.placeholder = ""; // placeholder 삭제
            tabIndicator.style.display = "none"; // "tab" 모양 숨기기
        }
    });
});


/* 탭키 숨기기 */ /*내용 입력 하면 */
document.addEventListener("DOMContentLoaded", () => {
    const promptInput = document.querySelector('.prompt-input');
    const tabIndicator = document.querySelector('.tab-indicator');

    // 텍스트 입력 시 .tab-indicator 숨기기
    promptInput.addEventListener('input', () => {
        if (promptInput.value.trim() !== '') {
            tabIndicator.style.display = 'none';
        } else {
            tabIndicator.style.display = 'block';
        }
    });
});




/* 아무것도 안그려져 있거나 아무것도 텍스트 입력 안하면 알림메시지 뜨도록 */

// JavaScript 통합 코드
document.addEventListener("DOMContentLoaded", () => {
    const promptInput = document.querySelector('.prompt-input');
    const createButton = document.querySelector('.create-button');
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    const loadingAnimation = document.getElementById("loading-animation");
    const resultContainer = document.querySelector(".Result");
    const video = document.querySelector("#backgroundVideo");
    const alertOverlay = document.getElementById("alertOverlay");
    const alertCloseButton = document.getElementById("alertCloseButton");

    // 초기 상태 설정
    let isCanvasEmpty = true;

    // 초기 로딩 및 결과 화면 숨기기
    if (resultContainer && loadingAnimation) {
        loadingAnimation.style.display = "none";
        resultContainer.style.display = "none";
    }

    // 그림이 그려지면 캔버스 상태 업데이트
    canvas.addEventListener('mousedown', () => {
        isCanvasEmpty = false;
        canvas.classList.remove('disabled');
    });

    // 팝업 표시 함수
    function showAlert() {
        alertOverlay.style.display = "flex";
    }

    // 팝업 닫기
    alertCloseButton.addEventListener("click", () => {
        alertOverlay.style.display = "none";
    });

    // 버튼 클릭 시 조건 확인 및 동작 통합
    createButton.addEventListener("click", (event) => {
        // 입력 값과 캔버스 상태 확인
        if (promptInput.value.trim() === '' && isCanvasEmpty) {
            showAlert(); // 커스텀 경고 팝업 표시
            return; // 조건을 충족하지 않으면 함수 종료
        }

        // 조건을 충족하면 배경 영상과 로딩 애니메이션 실행
        if (video && loadingAnimation && resultContainer) {
            // 배경 영상 변경
            video.querySelector("source").src = "SR5.mp4";
            video.load();
            video.play();

            // 로딩 애니메이션 표시 및 결과 숨기기
            loadingAnimation.style.display = "flex";
            resultContainer.style.display = "none";

            // 4초 후 로딩 숨기고 결과 표시, 배경 영상 복구
            setTimeout(() => {
                loadingAnimation.style.display = "none";
                resultContainer.style.display = "block";
                video.querySelector("source").src = "SR1.mp4";
                video.load();
                video.play();
            }, 4000);
        } else {
            console.error("필요한 요소가 존재하지 않습니다.");
        }
    });
});





