const PokeAPI = {
    async render() {
        document.getElementById('content').innerHTML = "<p style='margin-top: 20%; text-align: center;'>Loading...</p>"

        const bt1 = document.getElementById("button1")
        const bt2 = document.getElementById("button2")
        bt2.classList.add('chosen') & bt1.classList.remove('chosen')

        let view = '<h2 id="page-title" class="spa-title" style="font-size: 28pt">'
        async function GetPoke () {
            const randId = Math.floor(Math.random() * 807);
            const url = 'https://pokeapi.co/api/v2/pokemon/' + randId.toString() + '/'
            const pokemon = await fetch(url, {
                method: 'GET'
            }).then(response => {
                return response.json();
            });

            console.log(`Pokemon ${pokemon.name}:`, pokemon)
            
            let ability = new Array();
            for (let i = 0; i < pokemon.abilities.length; i++){
                let url = pokemon.abilities[i].ability.url;
                ability[i] = await fetch(url, {
                    method: 'GET'
                }).then(response => {
                    return response.json();
                })
                console.log(`Ability[${i}]:`, ability[i])
            }

            return {pokemon: pokemon, abilities: ability}
        }
        
        const pokemon = GetPoke().then(response => {return response});
        view += (await pokemon).pokemon.name[0].toUpperCase() + (await pokemon).pokemon.name.slice(1) + "</h2>"
        for (let i = 0; i < (await pokemon).abilities.length; i++){
            view += "<h3 class='header_three'>" + (await pokemon).abilities[i].name[0].toUpperCase() + (await pokemon).abilities[i].name.slice(1) + "</h3>";
            for (let j = 0; j < (await pokemon).abilities[i].effect_entries.length; j++)
            view += "<p class='paragraph'>" + (await pokemon).abilities[i].effect_entries[j].effect + "</p>";
        }

        return view;
    },

    async after_render() {
        const p = document.getElementsByClassName("paragraph");
        for (let par of p) {
            par.style.marginLeft = '20%';
            par.style.width = '60%';
        }
        const head = document.getElementsByClassName("header_three")
        for (let h of head) {
            h.style.marginLeft = '20%';
            h.style.width = 'fit-content';
            h.style.borderBottom = 'solid steelblue 2px';
        }
    }
}

export default PokeAPI;