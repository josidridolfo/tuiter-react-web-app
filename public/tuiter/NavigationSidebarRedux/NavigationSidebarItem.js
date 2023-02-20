

const NavigationSidebarItem = (navigations) => {

        return (`
<a href="${navigations.url}" class="list-group-item list-group-item-action d-flex align-items-center">
    <i class="fa ${navigations.faElement} pe-2"></i>
    <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">${navigations.caption}</span>
</a>`)
    }
export default NavigationSidebarItem;
