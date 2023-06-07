<script lang="ts">
	import { page } from '$app/stores';
	$: data = $page.data;
</script>

<header>
	<main>
		<h1>{data.name}</h1>
		<h2>{data.position}</h2>
	</main>
	<nav>
		<ul>
			<li>santiagogonzalez.dev</li>
			<li>santiagogonzalezbogado@gmail.com</li>
			<li>linkedin.profile</li>
			<li>github.profile</li>
		</ul>
	</nav>
</header>
<section class="experience">
	<h3>{data.experience.title}</h3>
</section>
<hr />
<section class="education">
	<h3>{data.education.title}</h3>
	<ol>
		{#each data.education.list as job}
			<li>{job.date}</li>
			<li>{job.in}</li>
			<li>{job.at}</li>
		{/each}
	</ol>
</section>
<section class="skills">
	<h3>{data.skills.title}</h3>
	<p>
		{data.skills.description}
		<a rel="external" target="_blank" href={data.skills.link[1]}>{data.skills.link[0]}</a>
	</p>
	<ol>
		<li>React(NextJS)</li>
		<li>Svelte(SvelteKit)</li>
		<li>Node</li>
		<li>Git</li>
		<li>Docker/Podman</li>
		<li>Typescript/Javascript(ES6+)</li>
		<li>CI/CD</li>
		<li>SQL(SQLite, MariaDB, MySQL, PostgreSQL)</li>
		<li>Python</li>
		<li>Java</li>
	</ol>
</section>
