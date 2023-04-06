<template>
    <div id="header">
        <div id="profile-pic">
            <img src="@/assets/me.jpg" alt="">
        </div>

        <div id="name-and-quote">
            <span id="name">Luc de Wit</span>
            <span id="quote">Good code is lazy code</span>
        </div>

        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/projects">Projects</router-link>
        </div>
    </div>

    <hr>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped lang="scss">
#header {
    display: flex;
    align-items: center;
    color: #333;

    #profile-pic img {
        width: 70px;
        height: 70px;
        border-radius: 10px;
    }

    #name-and-quote {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        #name {
            font-size: 2rem;
            font-weight: 600;
        }
    }

    #nav {
        // push nav to the right
        margin-left: auto;

        a {
            margin-left: 20px;
            font-size: 1.2rem;
            font-weight: 600;
            text-decoration: none;
            color: #666;
            cursor: pointer;

            &:hover {
                color: #000;
                text-decoration: underline;
            }

            &.router-link-active {
                color: #000;
            }
        }
    }
}
</style>