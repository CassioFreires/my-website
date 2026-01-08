export default function ServiceBlock({ title, description }: { title: string; description: string }) {
    return (
        <section className="card space-y-2">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-muted">{description}</p>
        </section>
    );
}