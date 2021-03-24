export function togleLesson(module, lesson){
    return{
        type: "TOGGLE_LESSON",
        module,
        lesson,
    };
}