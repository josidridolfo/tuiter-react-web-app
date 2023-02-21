const NavigationSidebarItem = (navigation, active) => {
    const isActive = navigation.caption == active ? 'active' : '';
    return (`
<a href="${navigation.url}" class="list-group-item list-group-item-action d-flex align-items-center ${isActive}">
    <i class="fa ${navigation.faElement} pe-2"></i>
    <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">${navigation.caption}</span>
</a>`)
}
export default NavigationSidebarItem;
