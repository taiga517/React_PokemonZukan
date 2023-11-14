export const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data));
    });
};

// fetchでdataを取得、それをjson形式で返す
// json形式で返された物をthenのプロミスチェーンでdataとして受け取る、resolve関数で成功してdataを返す
// Promiseオブジェクトで約束しているのは、fetchの.then.thenプロミスチェーンが全て成功するまでawaitして下さい
// getAllPokemon関数からdataを全て取得するまでawaitして変数resに返す
// ```let res = await getAllPokemon(initialURL);```


export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) =>  {
                console.log(data);
                resolve(data);
            });
    });
};
