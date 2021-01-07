function capitalize(inner) {
    inner.name = inner.name.toLowerCase();
    inner.description = inner.description.toLowerCase();
    inner.name = inner.name.charAt(0).toUpperCase() + inner.name.slice(1);
  }

  const lesson = { name: 'test', description: 'Some Description'};

  console.log(capitalize(lesson))