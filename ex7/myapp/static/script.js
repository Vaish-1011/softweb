function showContent(option) 
{
    const HomeContentDiv = document.getElementById('Home');
    const ProductContentDiv = document.getElementById('products');
    const PeopleContentDiv = document.getElementById('People');
    const ContactContentDiv = document.getElementById('ContactUs');

    if (option === 'Home') {
        HomeContentDiv.style.display = 'block';
        ProductContentDiv.style.display = 'none';
        PeopleContentDiv.style.display = 'none';
        ContactContentDiv.style.display = 'none';
        
    }
    else if (option === 'products') {
        HomeContentDiv.style.display = 'none';
        ProductContentDiv.style.display = 'block';
        PeopleContentDiv.style.display = 'none';
        ContactContentDiv.style.display = 'none';
    }
    else if (option === 'People') {
        HomeContentDiv.style.display = 'none';
        ProductContentDiv.style.display = 'none';
        PeopleContentDiv.style.display = 'block';
        ContactContentDiv.style.display = 'none';
    }
    else if (option === 'ContactUs') {
        HomeContentDiv.style.display = 'none';
        ProductContentDiv.style.display = 'none';
        PeopleContentDiv.style.display = 'none';
        ContactContentDiv.style.display = 'block';
    }
}